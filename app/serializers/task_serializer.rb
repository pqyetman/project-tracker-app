class TaskSerializer < ActiveModel::Serializer
  attributes :id, :employee_id, :project_id, :hours, :field_work, :description
  belongs_to :employee
end
