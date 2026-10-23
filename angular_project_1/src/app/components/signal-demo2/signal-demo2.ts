import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-signal-demo2',
  styleUrl: './signal-demo2.css',
  templateUrl: './signal-demo2.html',
})
export class SignalDemo2 {
  price = signal(500);
  quantity = signal(1);
  // Derived State : Automatically re-calculated
  totalPrice = computed(() => this.price() * this.quantity());
  constructor() {
    this.update_quantity();
  }
  update_quantity() {
    // Side Effect : whenever state/signal value changes , this logic will be executed
    effect(() => {
      const quantity = this.quantity();
      sessionStorage.setItem('cartQuantity', String(quantity));
      console.log('Quantity Saved: ', quantity);
    });
  }
  // ===========================================
  httpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  fetchUserDetails(id: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }
  destroyEffect() {
    this.userDetailsEffect.destroy();
  }
}
