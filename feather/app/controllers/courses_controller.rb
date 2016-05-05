class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
    @courses = Course.all
    @people = Course.find(params[:id]).people
    @array1 = ["collapseOne-l", "collapseTwo-l", "collapseThree-l", "collapseFour-l", "collapseFive-l", "collapseSix-l", "collapseSeven-l"]
    @array2 = ["#collapseOne-l", "#collapseTwo-l", "#collapseThree-l", "#collapseFour-l", "#collapseFive-l", "#collapseSix-l", "#collapseSeven-l"]
    @id = :id
    @welcome = ["American Literature and Composition is a study of the major literary topics and themes across the history of the United States from pre-colonial times to present day. Students will focus on the major literary forms of the emerging nation, analyze the literary themes and trends, and research and compose several papers, speeches, and presentations using representative forms of discourse. ", "Anatomy and physiology is a one year course that involves the structure and function of the human body, as it pertains to how the body systems relate to one another in organization, adaptation, and homeostasis.  This course will involve laboratory activities, projects, dissections, textbook material, models, diagrams, journal writings, and clinical studies.  The material learned in this course can be applied to medical field careers, health and fitness careers, and biological research careers.", "This course assumes that the student has demonstrated a solid foundation in algebra. Topics include the relationships between points, lines, and planes; the axiomatic system; logical thinking and proof-writing; measurement, including area and volume; congruency; similarity; two and three dimensional geometric figures; parallel and perpendicular lines; and the coordinate plane. Instruction in this course is designed for college-bound students." ]
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
