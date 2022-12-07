class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :employee_id
      t.integer :project_id
      t.integer :hours
      t.boolean :field_work
      t.string :description

      t.timestamps
    end
  end
end
