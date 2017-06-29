# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170629042036) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "check_in_date",              null: false
    t.integer  "check_out_date",             null: false
    t.integer  "host_id",                    null: false
    t.integer  "guest_id",                   null: false
    t.integer  "num_guests",     default: 1, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["guest_id"], name: "index_bookings_on_guest_id", using: :btree
    t.index ["host_id"], name: "index_bookings_on_host_id", using: :btree
  end

  create_table "homes", force: :cascade do |t|
    t.float   "lng",              null: false
    t.float   "lat",              null: false
    t.integer "owner_id",         null: false
    t.boolean "accepting_guests", null: false
    t.string  "description"
    t.index ["owner_id"], name: "index_homes_on_owner_id", using: :btree
  end

  create_table "hosts", force: :cascade do |t|
    t.float   "lng",                             null: false
    t.float   "lat",                             null: false
    t.string  "description"
    t.string  "fname",                           null: false
    t.string  "lname",                           null: false
    t.string  "city"
    t.string  "country"
    t.boolean "accepting_guests", default: true
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname"
    t.string   "lname"
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.text     "bio"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
