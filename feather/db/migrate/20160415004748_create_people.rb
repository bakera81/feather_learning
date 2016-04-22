class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :firstname
      t.string :lastname
      t.string :role
      t.string :image
      t.references :course, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
