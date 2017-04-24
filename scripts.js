$(document).ready(function () {
			function randomString() {
				var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
				var str = '';
				for (i = 0; i < 10; i++) {
					str += chars[Math.floor(Math.random() * chars.length)];
				}
				return str;
			}

			function Column(name) {
				var self = this; // przyda się dla funkcji zagnieżdżonych

				this.id = randomString();
				this.name = name;
				this.$element = createColumn();

				function createColumn() {
					// TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
					var $column = $('<div>').addClass('column');
					var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
					var $columnCardList = $('<ul>').addClass('column-list');
					var $columnDelete = $('<button>').addClass('btn-delete').text('x');
					var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

					// PODPINANIE ODPOWIEDNICH ZDARZEŃ
					$columnDelete.click(function () {
						self.removeColumn();
					});
					$columnAddCard.click(function (event) {
						self.addCard(new Card('prompt("Wpisz nazwę karty")));
						});

						// KONSTRUOWANIE ELEMENTU KOLUMNY
						$column.append($columnTitle)
							.append($columnDelete)
							.append($columnAddCard)
							.append($columnCardList);
						return $column;

						// ZWRACANIE STWORZONEJ  KOLUMNY
						return $column;
					});
					
					Column.prototype = {
						addCard: function (card) {
							this.$element.children('ul').append(card.$element);
						},
						removeColumn: function () {
							this.$element.remove();
						};
					



				};
					
					
