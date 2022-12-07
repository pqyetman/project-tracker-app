class ProjectSerializer < ActiveModel::Serializer
belongs_to :customer
has_many :tasks 
has_many :employees
attributes :id, :customer_id, :open, :description, :estimated_total_hours
end
