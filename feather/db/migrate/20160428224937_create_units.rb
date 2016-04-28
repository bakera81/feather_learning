class CreateUnits < ActiveRecord::Migration
  def change
    create_table :units do |t|
      t.belongs_to :courses
      t.string :title
      t.text :content

      t.timestamps null: false
    end
  end
end
