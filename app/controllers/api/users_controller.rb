class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def show
        render json: User.find(params[:id])
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])

        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :neighborhood_id, :email, :bio, :password)
    end
end
