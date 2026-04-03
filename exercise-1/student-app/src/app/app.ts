import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-app');
}
