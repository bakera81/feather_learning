class CoursesPeople < ActiveRecord::Migration
  def change
    create_table :courses_people, id: false do |t|
      t.belongs_to :course, index: true
      t.belongs_to :person, index: true
    end
  end
end
