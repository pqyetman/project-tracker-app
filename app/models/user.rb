class User < ApplicationRecord
    has_secure_password
    belongs_to :employee
    validates :username, presence: true, uniqueness: true 
    validates :employee_id, presence: true, uniqueness: true, numericality: { in: 0..10}
end
