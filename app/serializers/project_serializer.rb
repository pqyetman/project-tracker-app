class ProjectSerializer < ActiveModel::Serializer


attributes :id, :customer_id, :open, :description, :estimated_total_hours, :total, :customer_name
end
