class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.integer :customer_id
      t.boolean :open
      t.string :description
      t.integer :estimated_total_hours

      t.timestamps
    end
  end
end
