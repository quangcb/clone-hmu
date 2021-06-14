$(document).ready(function () {
    $("body").append(
        // header
        $("<div>", { class: "" }).append(
            $("<div>", { class: "" }).append(
                $("<div>", { class: "df bgce" },).append(
                    $("<div>", { class: "pa10" }).append(
                        $("<div>", { class: "bgpc bgsc bgrn", style: "background-image: url('images/logo.png'); height: 95px; width: 403px;" })
                    ),
                    $("<div>",{class:"df fdc jcsa"}).append(
                        $("<div>",{class:"wfc"}).append(
                            $("<button>",{class:"", text:"Đăng nhập"}),
                        ),
                        $("<div>",{class:"wfc"}).append(
                            $("<input>",{class:""})
                        ),
                        $("<div>", { class: "df cgr" }).append(
                            $("<div>", { class: "mlr10" }).append(
                                $("<a>", { href: "#", class: "", text: "TRANG CHỦ" })
                            ),
                            $("<div>", { class: "mlr10" }).append(
                                $("<a>", { href: "#", class: "", text: "TIN TỨC" })
                            ),
                            $("<div>", { class: "mlr10" }).append(
                                $("<a>", { href: "#", class: "", text: "ĐÀO TẠO" })
                            ),
                            $("<div>", { class: "mlr10" }).append(
                                $("<a>", { href: "#", class: "", text: "TUYỂN SINH - HƯỚNG NGHIỆP" })
                            ),
                            $("<div>", { class: "mlr10" }).append(
                                $("<a>", { href: "#", class: "", text: "LIÊN HỆ" })
                            )
                        )
                    )
                ),
                $("<div>", { class: "w1 h540 bgrn bgpc bgsc", style: "background-image: url('images/dai-hoc-y-ha-noi.jpg')" })
            )
        ),
        $("<div>", { class: "bgce" }).append(
            $("<div>", { class: "w1 ha"}).append(
                $("<div>",{class:" container pa50"}).append(
                    $("<div>", { class: "df jcsa"}).append(
                        $("<div>", { class: "col-xs-4 ma15" }).append(
                            $("<div>",{class:"ptb25 fwb pl15",text:"TIN TỨC - SỰ KIỆN"}),
                            $("<div>", {class:"hmn5 bgcf shadow"}).append(
                                $("<div>", { class: "w1 h200", style: "background-image: url('images/dai-hoc-y-ha-noi.jpg')" }),
                                $("<div>", { class: "ma25"}).append(
                                    $("<a>",{class:"ptb10 fwb", href:"#", text:"PHÒNG CHỐNG DỊCH COVID-19 (SARS-COV-2)"}),
                                    $("<div>",{class:"ptb15 cgr taj", text:"COVID-19 là đại dịch toàn cầu, gây ra nhiều thiệt hại về con người, kinh tế cho nhiều nước trong đó có Việt Nam. Việc nghiên cứu, phát triển và đánh giá hiệu quả của vắc xin COVID-19 là một trong những nhiệm vụ cấp bách và mục tiêu hàng đầu của Bộ Y tế nước nhà."}),
                                    $("<a>",{class:"", href:"#", text:"Xem thêm"}),
                                ),
                            )
                        ),
                        $("<div>", { class: "col-xs-4 ma15" }).append(
                            $("<div>",{class:"ptb25 fwb pl15",text:"TIN SINH VIÊN"}),
                            $("<div>", {class:"hmn5 bgcf shadow"}).append(
                                $("<div>", { class: "w1 h200", style: "background-image: url('images/dai-hoc-y-ha-noi.jpg')" }),
                                $("<div>", { class: "ma25"}).append(
                                    $("<a>",{class:"ptb10 fwb", href:"#", text:"TƯ VẤN TUYỂN SINH HƯỚNG NGHIỆP NĂM 2021"}),
                                    $("<div>",{class:"ptb15 cgr taj", text:"Nhằm cung cấp thông tin hướng nghiệp cho học sinh trước khi quyết định lựa chọn Trường Đại học, ngành học phù hợp, Trường Đại học Y Hà Nội tổ chức chương trình Tư vấn tuyển sinh hướng nghiệp trực tuyến với sự góp mặt của các giảng viên – tư vấn đến từ các Khoa/ Phòng/ Bộ môn của Trường vào 14h ngày 25 tháng 3 năm 2021."}),
                                    $("<a>",{class:"", href:"#", text:"Xem thêm"})
                                ),
                            )
                        ),
                        $("<div>", { class: "col-xs-4 ma15" }).append(
                            $("<div>", { class: "bgcrl ptb25 fwb pl15", text: "TIN CŨ" }),
                            $("<div>", {class:"hmn5 bgcf shadow"}).append(
                                $("<div>",{class:""}).append(
                                    $("<div>",{class:"pa15"}).append(
                                        $("<div>",{class:"mtb5"}).append(
                                            $("<i>",{ class:"far fa-calendar-alt", text:" 13/03/2021"})
                                        ),
                                        $("<a>",{class:"", href:"#", text:"Công bố Dự thảo về Quy định xét miễn và công nhận điểm học phần trong chương trình đào tạo đại học"}),
                                    ),
                                    $("<hr>", {class:""}),
                                    $("<div>",{class:"pa15"}).append(
                                        $("<div>",{class:"mtb5"}).append(
                                            $("<i>",{ class:"far fa-calendar-alt", text:" 13/03/2021"})
                                        ),
                                        $("<a>",{class:"", href:"#", text:"Quyết định Về việc ban hành sửa đổi, bổ sung quy chế đào tạo đại học hệ vừa học vừa làm theo hệ thống tín chỉ"}),
                                    ),
                                    $("<hr>", {class:""}),
                                    $("<div>",{class:"pa15"}).append(
                                        $("<div>",{class:"mtb5"}).append(
                                            $("<i>",{ class:"far fa-calendar-alt", text:" 13/03/2021"})
                                        ),
                                        $("<a>",{class:"", href:"#", text:"Quyết định Về viêc ban hành quy chế đào tạo đại học hệ chính quy theo hệ thống tín chỉ"}),
                                    ),
                                    $("<hr>", {class:""}),
                                    $("<div>",{class:"pa15"}).append(
                                        $("<div>",{class:"mtb5"}).append(
                                            $("<i>",{ class:"far fa-calendar-alt", text:" 13/03/2021"})
                                        ),
                                        $("<a>",{class:"", href:"#", text:"Kết Quả Thi Tốt Nghiệp Lý Thuyết và Thực Hành Bác Sĩ YHDP VB2 LT K5 2021"}),
                                    ),
                                    $("<hr>", {class:""}),
                                    $("<div>",{class:"pa15"}).append(
                                        $("<a>",{class:"", href:"#", text:"Xem tất cả "}),
                                    )
                                )
                            )
                        )
                    )
                )
            ),
        ),
        $("<div>",{class:"container"}).append(
            $("<div>",{class:"pa50 df"}).append(
                $("<div>",{class:""}).append(
                    $("<video>",{class:"w50", src:"images/mobi.mp4", controls: "", muted:"", autoplay:""}).append(
                        $("<source>",{ src:"images/mobi.mp4", type:"video/mp4"})
                    )
                ),
                // $("<div>",{class:""}).append(
                //     $("<div>",{text:"Thủ tướng Nguyễn Xuân Phúc: Tôn vinh các chiến sĩ áo blouse trắng trên mặt trận chống dịch COVID-19"})
                // )
            )
        ),
        // footer
        $("<div>",{class:"bgc6"}).append(
            $("<div>",{class:"container pa35"}).append(
                $("<div>",{class:"df acsa cfi mb5 col-sm-offset-3"}).append(
                        $("<div>",{class:"ma10"}).append(
                            $("<div>",{class:"ma10", text:"TRƯỜNG ĐẠI HỌC Y HÀ NỘI"}),
                            $("<div>",{class:"ma10", text:"01 Tôn Thất Tùng-Đống Đa-Hà Nội"}),
                            $("<div>",{class:"ma10", text:"Điện thoại: +84 024 38523798"}),
                            $("<div>",{class:"ma10", text:"Email: daihocyhn@hmu.edu.vn"}),
                        
                        ),
                        $("<div>",{class:"ma10"}).append(
                            $("<div>",{class:"ma10", text:"GIỚI THIỆU"}),
                            $("<div>",{class:"ma10", text:"Sứ mệnh - tầm nhìn"}),
                            $("<div>",{class:"ma10", text:"Lịch sử hình thành"}),
                            $("<div>",{class:"ma10", text:"Sơ đồ tổ chức"}),
                        ),
                        $("<div>",{class:"ma10"}).append(
                            $("<div>",{class:"ma10", text:"CHUYÊN MỤC KHẢO SÁT"}),
                            $("<div>",{class:"ma10", text:"Thư viện điện tử"}),
                            $("<div>",{class:"ma10", text:"Tạp chí nghiên cứu y học"}),
                            $("<div>",{class:"ma10", text:"Elearning - Học trực tuyến"}),
                
                )
                ),
                $("<hr>",{class:""}),
                $("<div>",{class:"cfi tac ma5", text:"Bản quyền thuộc Trường Đại học Y Hà Nội -2021"})
            )
        )
    )
})