class CoursesController < ApplicationController
  def index
    @course = Course.all
  end

  def show
    @course = Course.find(params[:id])
    @courses = Course.all
    @people = Course.find(params[:id]).people
  end

  def new
    @course = Course.new
    @course.units.new
  end

  def edit
    @course = Course.find(params[:id])
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      @courses.units.build
      redirect_to @course
    else
      render 'new'
    end
  end

  def update
    @course = Course.find(params[:id])

    if @course.update(course_params)
      @course.units.build
      redirect_to @course
    else
      render 'edit'
    end
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy

    redirect_to courses_path
  end

  private
    def course_params
      params.require(:course).permit(:title, :banner, :headshot, :units)
    end
end
