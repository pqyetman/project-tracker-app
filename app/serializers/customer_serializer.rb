class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :projects
end
