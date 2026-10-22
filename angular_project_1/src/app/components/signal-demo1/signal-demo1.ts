import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-demo1',
  styleUrl: './signal-demo1.css',
  templateUrl: './signal-demo1.html',
})
export class SignalDemo1 {
  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1); // 1 cup
  sugar = computed(() => this.cookieCount() * 0.05); // 1/2 cup
  flour = computed(() => this.cookieCount() * 0.2); // 2 cup
  updateCookieCount(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }

  // ========================
  fruits = signal(['Apple', 'Banana', 'Apricot', 'Orange', 'Mango', 'Pineapple', 'Guava']);
  searchTerm = signal('');

  filteredFruits = computed(() => {
    return this.fruits().filter((fruit) => {
      return fruit.toLowerCase().includes(this.searchTerm().toLowerCase());
    });
  });
}
