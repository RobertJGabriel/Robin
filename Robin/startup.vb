Public Class startup

    Private Sub LinkLabel1_LinkClicked(ByVal sender As System.Object, ByVal e As System.Windows.Forms.LinkLabelLinkClickedEventArgs)

    End Sub

    Private Sub Label1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Label1.Click
        My.Settings.productkey2 = TextBox1.Text

        My.Settings.productkey2 = (TextBox1.Text)
        If TextBox2.Text = ("1234") Then


            MsgBox("This is your password for to get into the settings", MsgBoxStyle.Information, "Enjoy Robin")
            Form1.Show()
            My.Settings.productkey34 = "true"
            My.Settings.Save()
            My.Settings.Reload()
            Me.Hide()
        Else
            MsgBox("Please Enter A Password", MsgBoxStyle.Critical, "Error")
        End If
        Form1.Show()
    End Sub

    Private Sub startup_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        If My.Settings.productkey34 = "true" Then
            Form1.Show()

            Me.Hide()

        End If
    End Sub

    Private Sub Label2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
        Process.Start("IExplore.exe", "http://www.projectbird.com/robin.html")
    End Sub
End Class
