class UpdateUnit < ActiveRecord::Migration
  def change
  	change_table :units do |t|
  		t.integer :course_id
  	end
  	  remove_column :units, :courses_id, :integer
  end
end
