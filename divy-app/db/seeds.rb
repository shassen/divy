# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!([
    {first_name: "test", last_name: "test", username: "testy", wallet: 100, email: "testy@test.com", password: "test", password_confirmation: "test", admin: true}
])