class AddUnit < ActiveRecord::Migration
  def change
    add_reference :courses, :unit, index: true
  end
end
