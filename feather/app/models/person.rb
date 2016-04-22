class Person < ActiveRecord::Base
  #has many through
  # has_many :users
  # has_many :courses, through: :users
  
  #has and belongs to many
  has_and_belongs_to_many :courses
end
