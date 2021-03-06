# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Transaction.delete_all
Group.delete_all
GroupUser.delete_all

User.create!([
    {first_name: "test", last_name: "test", username: "testy", wallet: 14000, email: "testy@test.com", password: "test", password_confirmation: "test", admin: true},
    {first_name: "admin", last_name: "admin", username: "admin", wallet: 6000, email: "admin@admin.com", password: "admin", password_confirmation: "admin", admin: true},
    {first_name: "user1", last_name: "user1", username: "user1", wallet: 5000, email: "user1@user1.com", password: "user1", password_confirmation: "user1", admin: true}
])

Group.create!([
    {name: "Home", wallet: 700, description: "Share all purchases between us"}
])

Transaction.create!([
    {amount: 350, location: "BestBuy", description: "Purchased a wireless router for apartment", approved: true, group: Group.first},
    {amount: 500, location: "Amazon.com", description: "New parts for PC", approved: true, group: Group.first},
    {amount: 1000, location: "Crate & Barrel", description: "New side table for apartment", approved: true, group: Group.first},
    {amount: 1500, location: "Crate & Barrel", description: "New couch for apartment", approved: true, group: Group.first},
    {amount: 80, location: "Amazon.com", description: "Cleaning supplies for apartment", approved: true, group: Group.first}
])

GroupUser.create!([
    {user: User.first, group: Group.first, admin: true, approved: false}
])

u1 = User.first
u2 = User.find(2);
u3 = User.find(3);
t1 = Transaction.first;
t2 = Transaction.find(2);
t3 = Transaction.find(3);
t4 = Transaction.find(4);
t5 = Transaction.find(5);

TransactionUser.create!([
    {user: u1, txn: t1, admin: true, approved: false},
    {user: u1, txn: t2, admin: true, approved: false},
    {user: u1, txn: t3, admin: true, approved: false},
    {user: u1, txn: t4, admin: true, approved: false},
    {user: u1, txn: t5, admin: true, approved: false},
    {user: u2, txn: t2, admin: true, approved: false},
    {user: u2, txn: t3, admin: true, approved: false},
    {user: u3, txn: t1, admin: true, approved: false},
    {user: u3, txn: t2, admin: true, approved: false}
])

