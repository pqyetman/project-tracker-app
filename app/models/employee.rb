class Employee < ApplicationRecord

    has_many :tasks
    has_many :projects
    has_one :user
    
end
