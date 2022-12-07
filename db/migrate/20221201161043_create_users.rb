class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :employee_id
      t.string :status

      t.timestamps
    end
  end
end
