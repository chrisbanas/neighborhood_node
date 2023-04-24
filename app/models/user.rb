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
#  last_login      :datetime         not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    validates :email,
        uniqueness: true,
        length: { in: 3..255 },
        format: { with: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    before_validation :ensure_session_token

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
