class Task < ApplicationRecord
belongs_to :project
belongs_to :employee
validates :description, presence: true, length: { in: 4..20 }
validates :employee_id, presence: true,  numericality: { in: 1..10}
validates :hours, presence: true,  numericality: { in: 1..8}
end
