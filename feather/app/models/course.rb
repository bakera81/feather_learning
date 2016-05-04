class Course < ActiveRecord::Base
  #has many through
  # has_many :users
  # has_many :people, through: :users
  # validates :title, presence: true, length: { minimum: 5 }

  #has and belongs to many
  has_and_belongs_to_many :people
  has_many :units

  accepts_nested_attributes_for :units, :allow_destroy => true
end
