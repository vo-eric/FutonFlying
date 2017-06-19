## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
image_url       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
bio             | string    |
city_id         | integer   | not null, foreign key
language        | string    | not null
interests       | string    | not null

  - has_many: reviews, bookings, hostings, languages, interests
  - belongs_to: city


## city
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    | not null
image_url   | string    | not null

  - has_many: hosts


## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
guest_id    | integer   | not null, foreign key, indexed
host_id     | integer   | not null, foreign key, indexed
start_date  | date      | not null
end_date    | date      | not null
num_travelers| integer  | not null
body        | string    | not null

  - belongs_to: host, guest

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
reviewer_id | integer   | not null, foreign key, indexed
reviewee_id | integer   | not null, foreign key, indexed
body        | string    | not null
rating      | integer   | not null

  -belongs_to: reviewer, reviewee
