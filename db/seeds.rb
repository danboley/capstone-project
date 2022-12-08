puts "Clearing database..."

User.destroy_all
Activity.destroy_all
Comment.destroy_all
Follow.destroy_all

# puts "Creating Users..."

# u1 = User.create(email: "dan@email.com", password_digest: "password", first_name: "Dan", last_name: "Boley", location: "Stamford", subscriber: true, pro_pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Simple_Stick_Figure.svg/640px-Simple_Stick_Figure.svg.png")
# u2 = User.create(email: "kathleen@email.com", password_digest: "password", first_name: "Kathleen", last_name: "Woods", location: "Stamford", subscriber: false, pro_pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Simple_Stick_Figure.svg/640px-Simple_Stick_Figure.svg.png")
# u3 = User.create(email: "user@email.com", password_digest: "password", first_name: "First", last_name: "Last", location: "NYC", subscriber: false, pro_pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Simple_Stick_Figure.svg/640px-Simple_Stick_Figure.svg.png")

# puts "Creating Activities..."

# a1 = Activity.create(title: "Run", date: "2022-11-01", time: "14:30:00", distance: "16.00", duration: "01:56:00", sport: "Running", elevation: "1450", description: "fun run", location: "Stamford, CT", map: "tbd", user_id: u1.id)
# a2 = Activity.create(title: "Run", date: "2022-11-02", time: "01:20:45", distance: "06.23", duration: "00:53:21", sport: "Running", elevation: "150", description: "nice and easy", location: "Stamford, CT", map: "tbd", user_id: u2.id)
# a3 = Activity.create(title: "Swim", date: "2022-11-03", time: "09:15:10", distance: "00.75", duration: "00:58:10", sport: "Swimming", elevation: "0", description: "open water", location: "NYC", map: "tbd", user_id: u3.id)

# puts "Creating Comments..."

# c1 = Comment.create(comment: "nice work!", activity_id: a1.id)
# c2 = Comment.create(comment: "good job", activity_id: a2.id)
# c3 = Comment.create(comment: "emoji", activity_id: a3.id)

# puts "Creating Follows..."

# f1 = Follow.create(follower_id: u1.id, following_id: u2.id)
# f2 = Follow.create(follower_id: u2.id, following_id: u1.id)
