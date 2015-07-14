require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "#new" do
    it "assigns an instance variable @user" do
      get :new
      expect(assigns(:user)).to be_a_new User
    end

    it "renders new.html.erb template file" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "#create" do
    context "with valid attributes" do

      def valid_request
        post :create, user: {first_name: "tam",
                             last_name: "Kbeili",
                             email: "tam@codecore.ca",
                             password: "abcd",
                             password_confirmation: "abcd"}
      end

      it "saves a user record in the database" do
        #valid_request
        expect { valid_request }.to change { User.count }.by(1)
      end

      it "redirects to root path" do
        valid_request
        expect(response).to redirect_to(root_path)
      end

      it "sets the session[:user_id] to be the created user id" do
         valid_request
         expect(session[:user_id]).to eq(User.last.id)
      end

      it "sets a flash message" do
        valid_request
        expect(flash[:notice]).to be
      end

  end

  context "Without valid attributes do" do

    def invalid_request
        post :create, user: {first_name: "tam",
                             password: "abcd"}
      end

      it "renders the new template" do
         invalid_request
         expect(response).to render_template(:new)
        end

      it "doesn't change the user count" do
        expect { invalid_request }.to_not change { User.count }
      end

  end

  end
end
