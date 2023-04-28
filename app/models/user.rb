# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  bio             :text
#  session_token   :string           not null
#  password_digest :string           not null
#  neighborhood_id :bigint           not null
#  last_login      :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    # Validations for SPIRE 2.0

    has_secure_password

    validates :email,
        presence: true,
        uniqueness: true,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    before_validation :ensure_session_token


    # Active Record Associations

    belongs_to :neighborhood,
    foreign_key: :neighborhood_id,
    class_name: :Neighborhood,
    inverse_of: :users

    has_many :posts,
    foreign_key: :author_id,
    class_name: :Post,
    inverse_of: :author,
    dependent: :destroy

    has_many :comments,
    foreign_key: :author_id,
    dependent: :destroy,
    inverse_of: :author

    has_many :likes,
    foreign_key: :liker_id,
    dependent: :destroy,
    inverse_of: :liker

    has_many :liked_posts,
    through: :likes,
    source: :likeable,
    source_type: :Post

    has_many :liked_comments,
    through: :likes,
    source: :likeable,
    source_type: :Comment

    has_one_attached :photo


    #SPIRE 2.0

    def self.find_by_credentials(credential, password)
        field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :email # this had username
        user = User.find_by(field => credential)
        user&.authenticate(password)
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        self.session_token
    end

    private

    def generate_unique_session_token
        SecureRandom.base64
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
end
