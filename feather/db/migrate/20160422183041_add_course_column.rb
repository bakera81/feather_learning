class AddCourseColumn < ActiveRecord::Migration
  def change
    change_table :courses do |t|
      t.string :headshot
    end
  end
end
