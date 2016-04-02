class User < ActiveRecord::Base

  has_secure_password

  has_many :rounds
  has_many :codes

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true,
                    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :password, presence: true

  def full_name
    "#{first_name} #{last_name}".strip
  end

  def rounds_by?(user)
    rounds.where(user: user).present?
  end

  def rounds_for(user)
    rounds.find_by_user_id(user)
  end

end
