class HomeController < ApplicationController
  def index
    @course = Course.all
  end
end
