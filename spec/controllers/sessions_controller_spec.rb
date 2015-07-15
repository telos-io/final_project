require 'rails_helper'

RSpec.describe SessionsController, type: :controller do

  describe "#new" do
    it "renders the new template (login form)" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "#create" do
    context "with valid credentials" do

      before do
          @user = User.create(first_name: "abc",
                              last_name: "def",
                              email: "abc@abc.com",
                              password: "abcd1234")
          post :create, email: "abc@abc.com", password: "abcd1234"
        end

        it "sets the session[:user_id] to the logged in id" do
          expect(session[:user_id]).to eq(@user.id)
        end

        it "redirects to the user page" do
          expect(response).to redirect_to user_path(@user)
        end

        it "sets a flash message" do
          expect(flash[:notice]).to be
        end

    end

    context "without valid credentials" do

      before do
          @user = User.create(first_name: "abc",
                              last_name: "def",
                              email: "abc@abc.com",
                              password: "abcd1234")
          post :create, email: "tim@tim.com", password: "invalid"
        end

      it "should not allow a login with invalid email" do
        expect(session[:user_id]).to_not be
      end

      it "should not allow a login with invalid password" do
        expect(session[:user_id]).to_not be
      end

      it "should renders new sessions page" do
        expect(response).to render_template(:new)
      end

      it "should set a alert message" do
        expect(flash[:alert]).to be
      end

    end

  end



end
