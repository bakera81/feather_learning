class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :banner
      t.string :headshot
      t.timestamps null: false
    end
  end
end
