export default class Queue {
  // public size: number = this.getSize();
  
  private items: any[] = [];

  // Um método para adicionar elemento (enqueue);
   public enqueue(value: any) {
     this.items.push(value);
  }

  // Um método para remover o primeiro elemento
  public dequeue() {
    this.items.shift();
  }

  // Um método para visualizar o primeiro elemento;
  peek() {
    return !this.isEmpty() ? this.items[0] : new Error('Queue is not full');
}

  // Uma método para verificar se a fila está vazia
  public isEmpty() {
    return this.items.length === 0;
  }

  // Uma método para verificar se o tamanho da fila
  public getSize() {
    return this.items.length;
  }
}