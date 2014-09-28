Public Class settings

    Private Sub Label4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label4.Click
        My.Settings.ban1 = TextBox1.Text
        My.Settings.ban1 = (TextBox1.Text)

        My.Settings.ban2 = TextBox2.Text
        My.Settings.ban2 = (TextBox2.Text)

        My.Settings.ban3 = TextBox3.Text
        My.Settings.ban3 = (TextBox3.Text)

        My.Settings.ban4 = TextBox4.Text
        My.Settings.ban4 = (TextBox4.Text)

        My.Settings.ban5 = TextBox5.Text
        My.Settings.ban5 = (TextBox5.Text)

        My.Settings.Save()
        Label4.Text = "Saved :)"
        Close()
    End Sub

    Private Sub Label5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label5.Click
        Form1.BackgroundImage = My.Resources.prjectheaser

        Form1.BackColor = Color.DeepSkyBlue


        My.Settings.clouds = "false"
        My.Settings.Save()
    End Sub

    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick
        Label4.Text = "Save"
    End Sub

    Private Sub settings_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Dim g As New Drawing2D.GraphicsPath()
        g.StartFigure()
        g.AddArc(New Rectangle(0, 0, 20, 20), 180, 90)
        g.AddLine(20, 0, Me.Width - 20, 0)
        g.AddArc(New Rectangle(Me.Width - 20, 0, 20, 20), -90, 90)
        g.AddLine(Me.Width, 20, Me.Width, Me.Height - 20)
        g.AddArc(New Rectangle(Me.Width - 20, Me.Height - 20, 20, 20), 0, 90)
        g.AddLine(Me.Width - 20, Me.Height, 20, Me.Height)
        g.AddArc(New Rectangle(0, Me.Height - 20, 20, 20), 90, 90)
        g.CloseFigure()
        Me.Region = New Region(g)


        TextBox1.Text = My.Settings.ban1
        TextBox2.Text = My.Settings.ban2
        TextBox3.Text = My.Settings.ban3
        TextBox4.Text = My.Settings.ban4
        TextBox5.Text = My.Settings.ban5
    End Sub
End Class