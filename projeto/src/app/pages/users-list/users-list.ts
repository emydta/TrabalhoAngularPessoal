import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import { User } from '../../models/user';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {

  usuarios: User[] = [];
  loading = true;
  erro = false;

  constructor(private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.userService.listarUsuarios().subscribe({
        // next recebe os usuários e executa o bloco de dentro caso dê certo
      next: (dados) => {
        this.usuarios = dados;
        this.loading = false;
        console.log(this.usuarios)
        this.cdr.detectChanges();
      },
      //error vai marcar o erro como true, e executando ele
      error: (err) => {
        this.erro = true;
        this.loading = false;
        this.cdr.detectChanges();
        }
      });

  }
}
