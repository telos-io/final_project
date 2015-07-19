class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.references :code, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :wpm
      t.integer :accuracy
      t.text :note

      t.timestamps null: false
    end
  end
end
