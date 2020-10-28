class AddAnsweredToUserDeck < ActiveRecord::Migration[6.0]
  def change
    add_column :user_decks, :answered, :integer, array: true, default: []
    add_column :user_decks, :unanswered, :integer, array: true, default: []
  end
end
