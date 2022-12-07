class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :employee_id
end
