class Project < ApplicationRecord
    belongs_to :customer
    has_many :tasks
    has_many :employees, through: :tasks
    validates :description, presence: true, length: { in: 4..20 }

    def total
        self.tasks.sum(&:hours)
    end

    def customer_name
        self.customer.name
    end


end
