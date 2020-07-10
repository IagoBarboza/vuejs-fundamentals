const shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'shopping list app',
    newItem: '',
    items: [
      {
        label: '10 party hats',
        purchased: false,
        highPriority: false
      },
      {
        label: '2 board games',
        purchased: true,
        highPriority: false,
      },
      {
        label: '20 cups',
        purchased: false,
        highPriority: true,
      },
    ],
  },
  computed: {
    characterCount() {
      return this.newItem.length; 
    },
    reversedItems() {
      return this.items.slice().reverse();
    }
  },
  methods: {
    saveItem: function() {
      this.items.push({
        label: this.newItem,
        purchased: false,
      });
      this.newItem = "";
    },
    changeState: function(state) {
      this.state = state;
    },
    togglePurchased(item) {
      item.purchased = !item.purchased;
    },
  },
});