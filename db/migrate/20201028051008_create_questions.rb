class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.integer :deck_id
      t.string :correct
      t.string :incorrect, array: true, default: []

      t.timestamps
    end
  end
end
