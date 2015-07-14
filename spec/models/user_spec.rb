require 'rails_helper'

RSpec.describe User, type: :model do
  def valid_attributes(new_attributes={})
    {first_name: "something", last_name: "something",
    email: "something@something.com",
    password: "abcd1234"}.merge(new_attributes)
  end

  #test group
  describe "validations" do
    it "has a first name" do
      user = User.new valid_attributes(first_name: nil)
      expect(user).to be_invalid
    end

    it "requires an email" do
      user = User.new valid_attributes(email: nil)
      user.save
      expect(user.errors.messages).to have_key(:email)
    end
    it "requires a password" do
      user = User.new valid_attributes(password: nil)
      user.save
      expect(user.errors.messages).to have_key(:password)
    end

    it "requires a valid email format" do
      user = User.new valid_attributes(email: "bad email")
      expect(user).to be_invalid
    end

describe ".fill_name" do
  it "returns the first_name and last_name if they exist" do
    user = User.new valid_attributes(first_name: "Steve", last_name: nil)
    expect(user.full_name).to eq("Steve")
  end

describe "hasing a password" do
  it "generates password_digest" do
    user = User.new valid_attributes
    expect(user.password_digest).to be
  end

end

end

  end

end
