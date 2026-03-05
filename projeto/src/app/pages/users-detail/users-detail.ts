import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-detail',
  imports: [CommonModule],
  templateUrl: './users-detail.html',
  styleUrl: './users-detail.css',
})
export class UsersDetail implements OnInit{

  usuario?: User;
  loading = true;
  idInvalido = false;

  constructor(
    private route: ActivatedRoute,
    private UserService: UserService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get('id'));

        //isNaN (is Not a Number) serve para validar se um valor é numerico ou nn e retorna valor booleano
        if (isNaN(id)) {
          this.idInvalido = true;
          this.loading = false;
          return;
        }

        this.UserService.buscarUsuarioPorId(id).subscribe({
          next: (dados) => {
            this.usuario = dados;
            this.loading = false;
            console.log(this.usuario)
            this.cdr.detectChanges();
          },
          error: () => {
            console.log(this.idInvalido)
            this.idInvalido = true;
            this.loading = false;
          }
        });

    });

}

}
