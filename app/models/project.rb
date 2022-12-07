class Project < ApplicationRecord
    belongs_to :customer
    has_many :tasks
    has_many :employees, through: :tasks
    validates :description, presence: true, length: { in: 4..20 }
end
