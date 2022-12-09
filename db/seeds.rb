# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."

# Seed your database here
Employee.all.each {|e| e.delete}
Customer.all.each {|e| e.delete}
Project.all.each {|e| e.delete}
Task.all.each {|e| e.delete}


10.times do 



    Employee.create(
    name: Faker::FunnyName.name,
    title: Faker::Military.dod_paygrade  

    )

end

100.times do 


        Customer.create(
        name: Faker::Company.name,
        address: Faker::Address.street_address     
    
        )

end

300.times do

        Project.create(
        open: [true,false].sample,
        description: Faker::Job.key_skill ,
        estimated_total_hours: rand(50..200),
        customer_id: Customer.all.ids.sample

        )
end

1000.times do

    Task.create(
        hours: rand(1..8),
        description: Faker::Hobby.activity,
        employee_id: Employee.all.ids.sample,
        project_id: Project.all.ids.sample,
        field_work: [true,false].sample     
    )

end

User.create(

username: "Admin2",
password: "Admin2",
employee_id: 2

)



puts "✅ Done seeding!"