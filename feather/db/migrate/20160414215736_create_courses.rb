class CreateCourses < ActiveRecord::Migration
  validates :title, uniqueness: true
  def change
    create_table :courses do |t|
      t.string :title
      t.string :banner

      t.timestamps null: false
    end
  end
end
